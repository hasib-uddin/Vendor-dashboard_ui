"use client";

import { Dialog } from "@headlessui/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { criticalityData, statusData, vendorTypeData } from "@/service/constant";
import { useRef } from "react";

interface AddVendorsProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddVendors: React.FC<AddVendorsProps> = ({ open, setOpen }) => {
    const cancelButtonRef = useRef(null);

    return (
        <Dialog initialFocus={cancelButtonRef} open={open} onClose={() => setOpen(false)} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500 opacity-75" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Vendor</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="mb-4">
                                <Label htmlFor="vendor-name" className="mb-2">Name</Label>
                                <Input type="text" id="vendor-name" placeholder="Enter vendor name" />
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <div className="mb-4 w-full">
                                    <Label htmlFor="vendor-type" className="mb-2">Type</Label>

                                    <Select >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select vendor type" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full">
                                            {vendorTypeData?.map((tp, index) => (
                                                <SelectItem key={index} value={tp.value} className="w-full">
                                                    {tp.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="mb-4 w-full">
                                    <Label htmlFor="vendor-type" className="mb-2">Type</Label>

                                    <Select >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select vendor type" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full">
                                            {criticalityData?.map((tp, index) => (
                                                <SelectItem key={index} value={tp.value} className="w-full">
                                                    {tp.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                               
                            </div>

                            <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
                            <div className="mb-4 w-full">
                                    <Label htmlFor="vendor-type" className="mb-2">Type</Label>

                                    <Select >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select vendor type" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full">
                                            {statusData?.map((tp, index) => (
                                                <SelectItem key={index} value={tp.value} className="w-full">
                                                    {tp.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                               

                                <div className="mb-4">
                                    <Label htmlFor="vendor-contact" className="mb-2">Contact</Label>
                                    <Input type="text" id="vendor-contact" placeholder="Enter contact details" />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Button variant="outline" onClick={() => setOpen(false)} className="mr-2">
                                    Cancel
                                </Button>
                                <Button >Add</Button>
                            </div>
                        </CardContent>
                    </Card>
            </div>
        </Dialog>
    );
};

export default AddVendors;
