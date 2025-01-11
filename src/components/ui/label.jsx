"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, isRequired, ...props }, ref) => (
  <div className="flex items-center gap-1"><LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
    {isRequired && <div className="text-rose-500">*</div>}
  </div>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
