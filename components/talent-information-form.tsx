"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TalentInformationForm() {
  const [skills, setSkills] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("")
  const [yearOfExperience, setYearOfExperience] = useState("")
  const [bio, setBio] = useState("")
  const [preferredSlots, setPreferredSlots] = useState("")
  const [location, setLocation] = useState("")
  const [availableFor, setAvailableFor] = useState("")
  const [acceptBookingFrom, setAcceptBookingFrom] = useState("")
  const [price, setPrice] = useState("")
  const [uploadWork, setUploadWork] = useState("")

  return (
    <form className="space-y-6">
      {/* Row 1: Skills, Experience Level, Year of Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="skills" className="text-xs font-normal text-gray-600">
            Skills
          </Label>
          <Select value={skills} onValueChange={setSkills}>
            <SelectTrigger id="skills" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="photography">Photography</SelectItem>
              <SelectItem value="dancing">Dancing</SelectItem>
              <SelectItem value="standup">Stand up Comedy</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="painting">Painting</SelectItem>
              <SelectItem value="cooking">Cooking/Backing</SelectItem>
              <SelectItem value="mehndi">Mehendhi art</SelectItem>
              <SelectItem value="crafts">Craft Workshops</SelectItem>
              <SelectItem value="makeup">Makeup & Styling</SelectItem>
              <SelectItem value="tattoo">Tattoo artist</SelectItem>
              <SelectItem value="tours">Custom Tours</SelectItem>
              <SelectItem value="talks">Language or Cultural talks</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience-level" className="text-xs font-normal text-gray-600">
            Experience level
          </Label>
          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger id="experience-level" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="expert">Expert</SelectItem>
              <SelectItem value="intermediate">Inter</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year-experience" className="text-xs font-normal text-gray-600">
            Year of experience
          </Label>
          <Input
            id="year-experience"
            type="text"
            placeholder="Ex: 3"
            value={yearOfExperience}
            onChange={(e) => setYearOfExperience(e.target.value)}
            className="h-12 border-gray-300 text-gray-700 text-base"
          />
        </div>
      </div>

      {/* Row 2: Bio/Description */}
      <div className="space-y-2">
        <Label htmlFor="bio" className="text-xs font-normal text-gray-600">
          Bio/Description
        </Label>
        <Textarea
          id="bio"
          placeholder="Write a few words describing your talent"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="min-h-[120px] resize-none border-gray-300 text-gray-700 text-base"
        />
      </div>

      {/* Row 3: Preferred Slots, Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="preferred-slots" className="text-xs font-normal text-gray-600">
            Preferred slots
          </Label>
          <Select value={preferredSlots} onValueChange={setPreferredSlots}>
            <SelectTrigger id="preferred-slots" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="everyday">Everyday</SelectItem>
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-xs font-normal text-gray-600">
            Location
          </Label>
          <Input
            id="location"
            type="text"
            placeholder="Ex: vizag"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12 border-gray-300 text-gray-700 text-base"
          />
        </div>
      </div>

      {/* Row 4: Available for, Accept booking from, Price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="available-for" className="text-xs font-normal text-gray-600">
            Available for
          </Label>
          <Select value={availableFor} onValueChange={setAvailableFor}>
            <SelectTrigger id="available-for" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="popups">Pop-ups</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="restaurants">Restaurants</SelectItem>
              <SelectItem value="cafes">Cafes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="accept-booking" className="text-xs font-normal text-gray-600">
            Accept booking from
          </Label>
          <Select value={acceptBookingFrom} onValueChange={setAcceptBookingFrom}>
            <SelectTrigger id="accept-booking" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tourists">Tourists</SelectItem>
              <SelectItem value="locals">Locals</SelectItem>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="vendors">Vendors</SelectItem>
              <SelectItem value="cafes">Cafes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-xs font-normal text-gray-600">
            Price
          </Label>
          <Select value={price} onValueChange={setPrice}>
            <SelectTrigger id="price" className="h-12 border-gray-300 text-gray-700 text-base">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="packages">Packages</SelectItem>
              <SelectItem value="custom">Custom Quote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 5: Upload your work */}
      <div className="space-y-2">
        <Label htmlFor="upload-work" className="text-xs font-normal text-gray-600">
          Upload your work
        </Label>
        <Input
          id="upload-work"
          type="text"
          placeholder="Paste your Google drive or Youtube link"
          value={uploadWork}
          onChange={(e) => setUploadWork(e.target.value)}
          className="h-12 border-gray-300 text-gray-700 text-base"
        />
        <p className="text-xs text-gray-500 mt-1">Supporting text</p>
      </div>
    </form>
  )
}
