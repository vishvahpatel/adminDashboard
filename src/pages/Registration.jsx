



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        birthdate: '',
        gender: '',
        bloodGroup: '',
        password: '',
        confirmPassword: '',
        state: ''
    });

    const [errors, setErrors] = useState({
        passwordError: false,
        photoError: false,
        ageProofError: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFileChange = (e) => {
        const { id, files } = e.target;
        if (files[0].size > 2 * 1024 * 1024) {
            setErrors({ ...errors, [`${id}Error`]: true });
            e.target.value = '';
        } else {
            setErrors({ ...errors, [`${id}Error`]: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrors({ ...errors, passwordError: true });
            return;
        } else {
            setErrors({ ...errors, passwordError: false });
        }

        console.log(formData);
        // Here you can send formData to your server

        // Redirect to login page after successful registration
        navigate('/login');
    };

    return (
        <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-6">Registration</h2>
            <div className="registration-form-wrapper overflow-auto max-h-[80vh]">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="date"
                    id="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <select
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input
                    type="text"
                    id="bloodGroup"
                    placeholder="Blood Group"
                    value={formData.bloodGroup.toUpperCase()}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                {errors.photoError && (
                    <span className="block text-left text-red-500 text-sm mb-2">File size exceeds 2MB</span>
                )}
                <span className="block text-left text-red-500 text-sm mb-2">Upload your photo of maximum 2MB</span>
                <input
                    type="file"
                    id="ageProof"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                {errors.ageProofError && (
                    <span className="block text-left text-red-500 text-sm mb-2">File size exceeds 2MB</span>
                )}
                <span className="block text-left text-red-500 text-sm mb-2">Upload your Aadhar card (maximum size of 2MB)</span>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                />
                {errors.passwordError && (
                    <div className="text-left text-red-500 text-sm mb-2">Password doesn't match</div>
                )}
                <select
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select State</option>
                    {/* Add options here */}
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                    Register
                </button>
            </form>
            
            
            </div>
        </div>
    );
};



