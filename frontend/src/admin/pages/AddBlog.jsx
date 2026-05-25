// src/admin/pages/AddBlog.jsx

import React, { useState } from "react";
import Layout from "../components/Layout";
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from "antd";

const { TextArea } = Input;

const AddBlog = () => {
    const [imageUrl, setImageUrl] = useState("");

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Layout>
            <div>

                {/* Page Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Add New Blog
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and publish a new blog post.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        className="grid grid-cols-1 gap-6"
                    >

                        {/* Blog Title */}
                        <Form.Item
                            label={
                                <span className="text-white font-medium">
                                    Blog Title
                                </span>
                            }
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter blog title",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter blog title"
                                size="large"
                                className="custom-input"
                            />
                        </Form.Item>

                        {/* Short Description */}
                        <Form.Item
                            label={
                                <span className="text-white font-medium">
                                    Blog Short Description
                                </span>
                            }
                            name="shortDescription"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please enter short description",
                                },
                            ]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Enter short description"
                                className="custom-input"
                            />
                        </Form.Item>

                        {/* Long Description */}
                        <Form.Item
                            label={
                                <span className="text-white font-medium">
                                    Blog Long Description
                                </span>
                            }
                            name="longDescription"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please enter long description",
                                },
                            ]}
                        >
                            <TextArea
                                rows={8}
                                placeholder="Enter long description"
                                className="custom-input"
                            />
                        </Form.Item>

                        {/* Blog Image URL */}
                        <Form.Item
                            label={
                                <span className="text-white font-medium">
                                    Blog Image URL
                                </span>
                            }
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter image URL",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Paste image URL"
                                size="large"
                                className="custom-input"
                                onChange={(e) =>
                                    setImageUrl(e.target.value)
                                }
                            />
                        </Form.Item>

                        {/* Image Preview */}
                        {imageUrl && (
                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">
                                <img
                                    src={imageUrl}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Grid Fields */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Date */}
                            <Form.Item
                                label={
                                    <span className="text-white font-medium">
                                        Date
                                    </span>
                                }
                                name="date"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select date",
                                    },
                                ]}
                            >
                                <DatePicker
                                    size="large"
                                    className="w-full"
                                />
                            </Form.Item>

                            {/* Author */}
                            <Form.Item
                                label={
                                    <span className="text-white font-medium">
                                        Author
                                    </span>
                                }
                                name="author"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter author name",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter author name"
                                    size="large"
                                    className="custom-input"
                                />
                            </Form.Item>

                            {/* Category */}
                            <Form.Item
                                label={
                                    <span className="text-white font-medium">
                                        Category
                                    </span>
                                }
                                name="category"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select category",
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    placeholder="Select category"
                                    options={[
                                        {
                                            value: "react",
                                            label: "React",
                                        },
                                        {
                                            value: "mongodb",
                                            label: "MongoDB",
                                        },
                                        {
                                            value: "javascript",
                                            label: "JavaScript",
                                        },
                                        {
                                            value: "tailwind",
                                            label: "Tailwind CSS",
                                        },
                                    ]}
                                />
                            </Form.Item>

                            {/* Tags */}
                            <Form.Item
                                label={
                                    <span className="text-white font-medium">
                                        Tags
                                    </span>
                                }
                                name="tags"
                            >
                                <Select
                                    mode="tags"
                                    size="large"
                                    placeholder="Add tags"
                                />
                            </Form.Item>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">

                            <Button
                                htmlType="submit"
                                size="large"
                                className="!bg-yellow-400 hover:!bg-yellow-300 !text-black !border-none !font-semibold !px-8"
                            >
                                Publish Blog
                            </Button>

                            <Button
                                size="large"
                                className="!bg-zinc-800 hover:!bg-zinc-700 !text-white !border-zinc-700 !px-8"
                            >
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Layout>
    );
};

export default AddBlog;