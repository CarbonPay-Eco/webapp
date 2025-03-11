import Image from "next/image"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import type { Project } from "../../../../types"

interface ProjectCardProps {
  project: Project
  onPurchase?: (project: Project) => void
}

export function ProjectCard({ project, onPurchase }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-black/40">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-1 flex items-center text-sm text-gray-400">
          <MapPin className="mr-1 h-4 w-4" />
          {project.location}
        </p>
      </CardContent>
      <CardFooter className="border-t border-white/10 p-6">
        <div className="flex w-full items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-400">Price per ton</p>
            <p className="font-semibold">{formatCurrency(project.pricePerTon)}/T</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-sm text-gray-400">Available</p>
            <p className="font-semibold">{project.availableCapacity}T</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

