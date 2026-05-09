import React, { useState } from 'react';

const FormFill = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyType: '',
        phone: '',
        role: '',
        companySize: '',
        trainees: '',
        trainingNeeds: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert('Form submitted successfully!');

        console.log(formData);

        setFormData({
            fullName: '',
            email: '',
            companyType: '',
            phone: '',
            role: '',
            companySize: '',
            trainees: '',
            trainingNeeds: '',
        });
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className="bg-[#F3F6F7] p-6 rounded-xl space-y-5"
            >
                {/* Full Name */}
                <div>
                    <label className="block mb-2 text-[18px]">
                        Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                        required
                    />
                </div>

                {/* Email & Company Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-[18px]">
                           Organization Email <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[18px]">
                            Company Type <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="companyType"
                            value={formData.companyType}
                            onChange={handleChange}
                            placeholder="Enter your company type"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Phone & Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-[18px]">
                            Phone Number <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[18px]">
                            Your Role <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Enter your role"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Company Size & Trainees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-[18px]">
                            Company Size <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="number"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            placeholder="Enter company size"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[18px]">
                            Number of People to Train{' '}
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="number"
                            name="trainees"
                            value={formData.trainees}
                            onChange={handleChange}
                            placeholder="Enter number of trainees"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Training Needs */}
                <div>
                    <label className="block mb-2 text-[18px]">
                        What are your organization's training needs?{' '}
                        <span className="text-red-500">*</span>
                    </label>

                    <input
                        name="trainingNeeds"
                        value={formData.trainingNeeds}
                        onChange={handleChange}
                        placeholder="e.g. Customer service training, compliance training etc."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-gray-400"
                        required
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-[#FFDE59] py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default FormFill;