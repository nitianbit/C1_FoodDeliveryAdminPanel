import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';

const FoodForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        rating: '',
        price: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({ ...formData, image: imageFile });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className=" bg-white rounded-md my-5">
            <h1 className="text-sm my-2 text-center uppercase text-gray-900">Add Food Details</h1>
            <form 
                className="mt-2 mb-2 w-full mx-auto px-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-6">
                    <Input 
                        label="Name" type="text" id="name" name="name" 
                        value={formData.name} onChange={handleChange} 
                    />
                    <Input
                        label="Description" type="text" id="description" name="description"
                        value={formData.description} onChange={handleChange}
                    />
                    <Input
                        label="Price" type="text" id="price" name="price"
                        value={formData.price} onChange={handleChange}
                    />
                    <Input
                        label="Rating" type="text" id="rating" name="rating"
                        value={formData.rating} onChange={handleChange}
                    />
                    <input label="Add Image" type="file" id="image" name="image" onChange={handleImageChange} className="w-full border rounded-md px-4 py-2" accept="image/*" required />
                    <Button type="submit" className=" w-full tracking-wider">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FoodForm;
