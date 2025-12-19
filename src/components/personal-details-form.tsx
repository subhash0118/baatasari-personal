"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Upload } from "lucide-react"
import Image from "next/image"

interface PersonalDetailsFormProps {
  onContinue: () => void
}

export default function PersonalDetailsForm({ onContinue }: PersonalDetailsFormProps) {
  const [profileImage, setProfileImage] = useState("/abstract-profile.png")
  const [partnerProfileImage, setPartnerProfileImage] = useState("/abstract-profile.png")
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailId: "",
    dateOfBirth: "",
    gender: "",
    relationshipStatus: "",
    location: "",
    profession: "",
  })

  const [partnerData, setPartnerData] = useState({
    fullName: "",
    mobileNumber: "",
    anniversaryDate: "",
    dateOfBirth: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePartnerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPartnerProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handlePartnerInputChange = (field: string, value: string) => {
    setPartnerData((prev) => ({ ...prev, [field]: value }))
    if (errors[`partner_${field}`]) {
      setErrors((prev) => ({ ...prev, [`partner_${field}`]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required"
    if (!formData.emailId.trim()) newErrors.emailId = "Email is required"
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.relationshipStatus) newErrors.relationshipStatus = "Relationship status is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!formData.profession.trim()) newErrors.profession = "Profession is required"

    if (formData.relationshipStatus && formData.relationshipStatus !== "single") {
      if (!partnerData.fullName.trim()) newErrors.partner_fullName = "Partner full name is required"
      if (!partnerData.mobileNumber.trim()) newErrors.partner_mobileNumber = "Partner mobile number is required"
      if (!partnerData.anniversaryDate.trim()) newErrors.partner_anniversaryDate = "Anniversary date is required"
      if (!partnerData.dateOfBirth.trim()) newErrors.partner_dateOfBirth = "Partner date of birth is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("[v0] Form data:", formData)
      console.log("[v0] Partner data:", partnerData)
      onContinue()
    } else {
      console.log("[v0] Validation errors:", errors)
    }
  }

  const showPartnerDetails = formData.relationshipStatus && formData.relationshipStatus !== "single"

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">Personal Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="h-52 w-52 rounded-full overflow-hidden bg-yellow-400 border-4 border-white shadow-lg">
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  width={208}
                  height={208}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="profile-upload">
                <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <Upload className="h-4 w-4" />
                  <span className="font-medium">Change picture</span>
                </div>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm text-gray-600">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="text-sm text-gray-600">
                  Mobile Number
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
              </div>

              {/* Email Id */}
              <div className="space-y-2">
                <Label htmlFor="emailId" className="text-sm text-gray-600">
                  Email Id
                </Label>
                <Input
                  id="emailId"
                  type="email"
                  placeholder="Enter your email id"
                  value={formData.emailId}
                  onChange={(e) => handleInputChange("emailId", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.emailId && <p className="text-red-500 text-xs mt-1">{errors.emailId}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm text-gray-600">
                  Date of Birth
                </Label>
                <Input
                  id="dateOfBirth"
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-sm text-gray-600">
                  Gender
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger id="gender" className="h-14 bg-white border-gray-300">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Relationship Status */}
              <div className="space-y-2">
                <Label htmlFor="relationshipStatus" className="text-sm text-gray-600">
                  Relationship Status
                </Label>
                <Select
                  value={formData.relationshipStatus}
                  onValueChange={(value) => handleInputChange("relationshipStatus", value)}
                >
                  <SelectTrigger id="relationshipStatus" className="h-14 bg-white border-gray-300">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="in-relationship">In a relationship</SelectItem>
                  </SelectContent>
                </Select>
                {errors.relationshipStatus && <p className="text-red-500 text-xs mt-1">{errors.relationshipStatus}</p>}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm text-gray-600">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Enter current location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              {/* Profession */}
              <div className="space-y-2">
                <Label htmlFor="profession" className="text-sm text-gray-600">
                  Profession
                </Label>
                <Input
                  id="profession"
                  placeholder="Enter your Profession"
                  value={formData.profession}
                  onChange={(e) => handleInputChange("profession", e.target.value)}
                  className="h-14 bg-white border-gray-300"
                />
                {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
              </div>
            </div>
          </div>
        </div>

        {showPartnerDetails && (
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-12">Partner Details</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
              {/* Partner Profile Image Section */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative">
                  <div className="h-52 w-52 rounded-full overflow-hidden bg-yellow-400 border-4 border-white shadow-lg">
                    <Image
                      src={partnerProfileImage || "/placeholder.svg"}
                      alt="Partner Profile"
                      width={208}
                      height={208}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="partner-profile-upload">
                    <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                      <Upload className="h-4 w-4" />
                      <span className="font-medium">Change picture</span>
                    </div>
                    <input
                      id="partner-profile-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePartnerImageChange}
                    />
                  </label>
                </div>
              </div>

              {/* Partner Form Fields Section */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Partner Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="partnerFullName" className="text-sm text-gray-600">
                      Full Name
                    </Label>
                    <Input
                      id="partnerFullName"
                      placeholder="xyz"
                      value={partnerData.fullName}
                      onChange={(e) => handlePartnerInputChange("fullName", e.target.value)}
                      className="h-14 bg-white border-gray-300"
                    />
                    {errors.partner_fullName && <p className="text-red-500 text-xs mt-1">{errors.partner_fullName}</p>}
                  </div>

                  {/* Partner Mobile Number */}
                  <div className="space-y-2">
                    <Label htmlFor="partnerMobileNumber" className="text-sm text-gray-600">
                      Mobile Number
                    </Label>
                    <Input
                      id="partnerMobileNumber"
                      type="tel"
                      placeholder="1234567890"
                      value={partnerData.mobileNumber}
                      onChange={(e) => handlePartnerInputChange("mobileNumber", e.target.value)}
                      className="h-14 bg-white border-gray-300"
                    />
                    {errors.partner_mobileNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.partner_mobileNumber}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Anniversary Date */}
                  <div className="space-y-2">
                    <Label htmlFor="anniversaryDate" className="text-sm text-gray-600">
                      Anniversary Date
                    </Label>
                    <Input
                      id="anniversaryDate"
                      type="text"
                      placeholder="15/09/1999"
                      value={partnerData.anniversaryDate}
                      onChange={(e) => handlePartnerInputChange("anniversaryDate", e.target.value)}
                      className="h-14 bg-white border-gray-300"
                    />
                    {errors.partner_anniversaryDate && (
                      <p className="text-red-500 text-xs mt-1">{errors.partner_anniversaryDate}</p>
                    )}
                  </div>

                  {/* Partner Date of Birth */}
                  <div className="space-y-2">
                    <Label htmlFor="partnerDateOfBirth" className="text-sm text-gray-600">
                      Date of Birth
                    </Label>
                    <Input
                      id="partnerDateOfBirth"
                      type="text"
                      placeholder="15/09/1999"
                      value={partnerData.dateOfBirth}
                      onChange={(e) => handlePartnerInputChange("dateOfBirth", e.target.value)}
                      className="h-14 bg-white border-gray-300"
                    />
                    {errors.partner_dateOfBirth && (
                      <p className="text-red-500 text-xs mt-1">{errors.partner_dateOfBirth}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-12 pt-8 border-t border-gray-200">
          <Button
            type="submit"
            className="px-8 py-6 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-base font-medium"
          >
            Save & Continue
          </Button>
        </div>
      </form>
    </main>
  )
}
