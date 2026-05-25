// src/admin/pages/AllBlog.jsx

import React from "react";
import Layout from "../components/Layout";
import { Table, Button, Tag } from "antd";
import {
    FaEdit,
    FaTrash,
    FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const blogData = [
    {
        key: "1",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        title: "Learn React In 2026",
        category: "React",
        author: "Admin",
        date: "25 May 2026",
        tags: ["React", "Frontend"],
    },

    {
        key: "2",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        title: "MongoDB Complete Guide",
        category: "MongoDB",
        author: "Anish",
        date: "20 May 2026",
        tags: ["Database", "MongoDB"],
    },

    {
        key: "3",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        title: "Tailwind CSS Mastery",
        category: "Tailwind",
        author: "Admin",
        date: "18 May 2026",
        tags: ["CSS", "Tailwind"],
    },

    {
        key: "4",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        title: "JavaScript Advanced Concepts",
        category: "JavaScript",
        author: "John",
        date: "15 May 2026",
        tags: ["JS", "Programming"],
    },
];

const AllBlog = () => {

    const navigate = useNavigate()

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            render: (image) => (
                <img
                    src={image}
                    alt="blog"
                    className="w-[90px] h-[60px] object-cover rounded-xl border border-zinc-700"
                />
            ),
        },

        {
            title: "Title",
            dataIndex: "title",
            render: (title) => (
                <span className="text-white font-semibold">
                    {title}
                </span>
            ),
        },

        {
            title: "Category",
            dataIndex: "category",
            render: (category) => (
                <Tag color="gold">
                    {category}
                </Tag>
            ),
        },

        {
            title: "Author",
            dataIndex: "author",
            render: (author) => (
                <span className="text-zinc-300">
                    {author}
                </span>
            ),
        },

        {
            title: "Date",
            dataIndex: "date",
            render: (date) => (
                <span className="text-zinc-400">
                    {date}
                </span>
            ),
        },

        {
            title: "Tags",
            dataIndex: "tags",
            render: (tags) => (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Tag
                            key={index}
                            color="processing"
                        >
                            {tag}
                        </Tag>
                    ))}
                </div>
            ),
        },

        {
            title: "Actions",
            render: () => (
                <div className="flex items-center gap-3">

                    {/* View */}
                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white transition flex items-center justify-center">
                        <FaEye />
                    </button>

                    {/* Edit */}
                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center">
                        <FaEdit />
                    </button>

                    {/* Delete */}
                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <Layout>
            <div>

                {/* Heading */}
                <div className="flex items-center justify-between mb-10">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            All Blogs
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all published blogs here.
                        </p>
                    </div>

                    <Button
                        size="large"
                        className="!bg-yellow-400 hover:!bg-yellow-300 !text-black !border-none !font-semibold !px-6"
                        onClick={()=> navigate('/admin/add-blog')}
                    >
                        Add New Blog
                    </Button>
                </div>

                {/* Table Container */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 overflow-x-auto">

                    <Table
                        columns={columns}
                        dataSource={blogData}
                        pagination={{
                            pageSize: 5,
                        }}
                        className="custom-table"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default AllBlog;