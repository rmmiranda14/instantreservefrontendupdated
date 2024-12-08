'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, CreditCard, Lock, Settings, User, Calendar } from 'lucide-react';

type TabName = 'account' | 'reservations' | 'payment' | 'notifications' | 'security' | 'accessibility';

export default function Userpage() {
  const [activeTab, setActiveTab] = useState<TabName>('account');
  const [userData, setUserData] = useState<any>(null);
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://127.0.0.1:8000/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://127.0.0.1:8000/reservations/reservations/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setReservations(data);
      }
    } catch (error) {
      console.error('Failed to fetch reservations:', error);
    }
  };

  const updateUser = async (updatedData: any) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/users/api/users/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        alert('User information updated successfully.');
        fetchUserData();
      } else {
        alert('Failed to update user information.');
      }
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchReservations();
  }, []);

  const tabContent: Record<TabName, React.ReactNode> = {
    account: (
      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <p>Loading user information...</p>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  defaultValue={userData?.username || ''}
                  placeholder="Enter your username"
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue={userData?.email || ''}
                  placeholder="Enter your email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Preferred Phone Number</Label>
                <Input
                  id="phone"
                  defaultValue={userData?.phone || ''}
                  placeholder="Enter your phone number"
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              </div>
              <Button onClick={() => updateUser(userData)}>Update User Information</Button>
            </>
          )}
        </CardContent>
      </Card>
    ),
    reservations: (
      <Card>
        <CardHeader>
          <CardTitle>Your Reservations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {reservations.length === 0 ? (
            <p>You have no reservations.</p>
          ) : (
            reservations.map((reservation, index) => (
              <div key={index} className="border p-4 rounded">
                <p>Reservation Time: {reservation.reservation_time}</p>
                <p>Party Size: {reservation.party_size}</p>
                <p>Created At: {reservation.creation_date}</p>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    ),
    payment: (
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="Enter your card number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="Enter CVV" />
            </div>
          </div>
          <Button className="w-full">Add Payment Method</Button>
        </CardContent>
      </Card>
    ),
    notifications: (
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>Push Notifications</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>SMS Notifications</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>
    ),
    security: (
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
          <div className="flex items-center justify-between">
            <Label>Enable Two-Factor Authentication</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>
    ),
    accessibility: (
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Text Size</Label>
            <Input type="range" min="12" max="24" />
          </div>
          <div className="space-y-2">
            <Label>Color Mode</Label>
            <Input placeholder="Select color mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label>Dark Mode Enabled?</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>High Contrast Mode</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>Reduce Motion</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen flex px-0 py-0">
        {/* Sidebar */}
        <div className="bg-red-600/30 p-6 lg:w-1/5 flex flex-col ">
          <div className="flex flex-col items-center space-y-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>Profile Pic</AvatarFallback>
            </Avatar>
            <nav className="flex w-full flex-col space-y-2">
              <Button
                variant={activeTab === 'account' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('account' as TabName)}
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button
                variant={activeTab === 'reservations' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('reservations' as TabName)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Reservations
              </Button>
              <Button
                variant={activeTab === 'payment' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('payment' as TabName)}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment
              </Button>
              <Button
                variant={activeTab === 'notifications' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('notifications' as TabName)}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant={activeTab === 'security' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('security' as TabName)}
              >
                <Lock className="mr-2 h-4 w-4" />
                Security
              </Button>
              <Button
                variant={activeTab === 'accessibility' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('accessibility' as TabName)}
              >
                <Settings className="mr-2 h-4 w-4" />
                Accessibility
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}