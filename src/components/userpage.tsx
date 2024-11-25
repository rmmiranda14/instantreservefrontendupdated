import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, CreditCard, Lock, Settings, User } from 'lucide-react'

export default function Userpage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-5">
        {/* Sidebar */}
        <div className="bg-rose-200 p-6 lg:col-span-1">
          <div className="flex flex-col items-center space-y-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
            <nav className="flex w-full flex-col space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Lock className="mr-2 h-4 w-4" />
                Security
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Accessibility
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-4 p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" placeholder="Enter your display name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Preferred Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-size">Text Size</Label>
                <Input id="text-size" type="range" min="12" max="24" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="color-mode">Color Mode</Label>
                <Input id="color-mode" placeholder="Select color mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode Enabled?</Label>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
          </Card>

          {[1, 2].map((section) => (
            <Card key={section}>
              <CardHeader>
                <CardTitle>Other Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((setting) => (
                  <div key={setting} className="flex items-center justify-between">
                    <Label htmlFor={`setting-${section}-${setting}`}>Setting {setting}</Label>
                    <Switch id={`setting-${section}-${setting}`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer 
      <footer className="bg-rose-200 p-6">
        <div className="container mx-auto grid grid-cols-4 gap-4 text-sm">
          <div>
            <p>1234 Address St</p>
            <p>San Diego, California</p>
            <p>619-123-4567</p>
          </div>
          <div className="text-center">
            <Button variant="link">Contact Us</Button>
          </div>
          <div className="text-center">
            <Button variant="link">Privacy</Button>
          </div>
          <div className="text-center">
            <Button variant="link">Support</Button>
          </div>
        </div>
      </footer> 
      */}
    </div>
  )
}