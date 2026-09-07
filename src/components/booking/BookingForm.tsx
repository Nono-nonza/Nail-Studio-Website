"use client";

import { useMemo, useState } from "react";
import { nailServices, hairServices } from "@/data/services";
import { extensionLocation, mainLocation } from "@/data/locations";
import { bookingConfig } from "@/data/booking";
import { buildBookingMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const fieldClass =
  "w-full rounded-xl border border-brand-brown/20 bg-surface px-4 py-3 text-sm text-brand-brown placeholder:text-muted-foreground focus:border-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-sage-light/50";

const labelClass = "mb-2 block text-sm font-medium text-brand-brown";

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatDisplayDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function BookingForm() {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [notes, setNotes] = useState("");

  const today = useMemo(() => new Date(), []);
  const minDate = useMemo(() => toIsoDate(today), [today]);
  const maxDate = useMemo(() => {
    const max = new Date(today);
    max.setDate(max.getDate() + bookingConfig.maxAdvanceBookingDays);
    return toIsoDate(max);
  }, [today]);

  const selectedService = [...nailServices, ...hairServices].find((s) => s.id === serviceId);
  const isComplete = Boolean(
    selectedService && date && time && name.trim() && whatsappNumber.trim()
  );

  // Nail services go to the main WhatsApp line; hair services go to the
  // expanded studio's line. This is booking-flow routing only — the
  // customer never sees or chooses between "studios".
  const destinationWhatsApp =
    selectedService?.category === "hair"
      ? extensionLocation.whatsapp.internationalNumber
      : mainLocation.whatsapp.internationalNumber;

  const message =
    isComplete && selectedService
      ? buildBookingMessage({
          serviceName: selectedService.name,
          date: formatDisplayDate(date),
          time,
          customerName: name.trim(),
          customerWhatsApp: whatsappNumber.trim(),
          notes: notes.trim() || undefined,
        })
      : undefined;

  return (
    <div className="shadow-clay mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-surface to-brand-cream/20 p-6 sm:p-10">
      <form
        className="space-y-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="service" className={labelClass}>
            Choose your service
          </label>
          <select
            id="service"
            className={fieldClass}
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
          >
            <option value="" disabled>
              Select a service
            </option>
            <optgroup label="Nail Services">
              {nailServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} — {service.priceLabel}
                </option>
              ))}
            </optgroup>
            <optgroup label="Hair Services">
              {hairServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} — {service.priceLabel}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className={labelClass}>
              Preferred date
            </label>
            <input
              id="date"
              type="date"
              className={fieldClass}
              min={minDate}
              max={maxDate}
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time" className={labelClass}>
              Preferred time
            </label>
            <select
              id="time"
              className={fieldClass}
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <option value="" disabled>
                Select a time
              </option>
              {bookingConfig.timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Bookings can be requested up to {bookingConfig.maxAdvanceBookingDays} days in advance.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Your name
            </label>
            <input
              id="name"
              type="text"
              className={fieldClass}
              placeholder="e.g. Thandiwe Mokoena"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              Your WhatsApp number
            </label>
            <input
              id="whatsapp"
              type="tel"
              className={fieldClass}
              placeholder="e.g. 071 234 5678"
              value={whatsappNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>
            Notes <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="notes"
            className={fieldClass}
            rows={3}
            placeholder="Anything else we should know?"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>

        <div className="pt-2">
          {isComplete ? (
            <WhatsAppButton
              internationalNumber={destinationWhatsApp}
              message={message}
              className="w-full sm:w-auto"
            >
              Send Booking Request via WhatsApp
            </WhatsAppButton>
          ) : (
            <Button type="button" variant="outline" disabled className="w-full sm:w-auto">
              Fill in the details above to continue
            </Button>
          )}
          <p className="mt-3 text-xs text-muted-foreground">{bookingConfig.disclaimer}</p>
        </div>
      </form>
    </div>
  );
}
