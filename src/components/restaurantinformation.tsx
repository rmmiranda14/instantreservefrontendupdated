'use client'

import { Search, ChevronLeft } from 'lucide-react';
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import Image1 from "@/app/restaurantinformation/Image1.jpeg";
import Image2 from "@/app/restaurantinformation/Image2.jpeg";

export function RestaurantInformation() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [partySize, setPartySize] = useState<number>(2); // Default party size
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // New state for confirmation
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleReservationConfirm = async () => {
    const timeMapping: Record<string, number> = {
      '11:30 AM': 1130,
      '12:00 PM': 1200,
      '12:30 PM': 1230,
      '1:00 PM': 1300,
      '1:30 PM': 1330,
      '2:00 PM': 1400,
      '5:30 PM': 1730,
      '6:00 PM': 1800,
      '6:30 PM': 1830,
      '7:00 PM': 1900,
      '7:30 PM': 1930,
      '8:00 PM': 2000,
    };

    const reservationTime = timeMapping[selectedTime || ''];
    if (!reservationTime) {
      setErrorMessage('Invalid time selected.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('You must be logged in to make a reservation.');
      return;
    }

    const payload = {
      reservation_time: reservationTime,
      party_size: partySize,
      creation_date: new Date().toISOString(), // Current date and time
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/reservations/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.detail || 'Failed to confirm reservation.');
      }

      setConfirmationMessage(`Reservation confirmed for ${selectedTime} for a party of ${partySize}!`);
      setErrorMessage(null); // Clear any previous error message
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to confirm reservation.');
      setConfirmationMessage(null); // Clear any previous success message
    }
  };

  const times = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <div className="mb-8 mt-4">
          <h2 className="text-3xl font-bold mb-2">Location Name 1</h2>
          <p className="text-gray-600">Location address Contact Phone Number</p>
        </div>

        {/* Confirmation or Error Banner */}
        {confirmationMessage && (
          <div className="p-4 mb-4 text-green-800 bg-green-200 rounded-lg">
            {confirmationMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 mb-4 text-red-800 bg-red-200 rounded-lg">
            {errorMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-gray-100 rounded-lg border relative">
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2 flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  ▶
                </Button>
                <div className="h-1 flex-1 bg-gray-200 rounded">
                  <div className="w-1/3 h-full bg-primary rounded" />
                </div>
                <span className="text-sm">0:00/3:53</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What is this place?</h3>
              <p className="text-gray-600 mb-4">
                Some default text to fill some space, and something more so there is more text
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={Image1}
                alt="Restaurant image 1"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src={Image2}
                alt="Restaurant image 2"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {times.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="w-full py-2"
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </Button>
              ))}
            </div>

            {selectedTime && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-center font-semibold">
                  You've selected {selectedTime} for your reservation. What is your party size?
                </p>
                <div className="mt-2">
                  <input
                    type="number"
                    min="1"
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    placeholder="Party Size"
                    className="w-full px-3 py-2 border rounded-md mb-4"
                  />
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={handleReservationConfirm}
                >
                  Confirm Reservation
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default RestaurantInformation;