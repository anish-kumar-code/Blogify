// src/pages/HomePage.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: "How To Start Learning React In 2026",
        image:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        desc: "Complete beginner roadmap to become a React developer.",
    },

    {
        id: 2,
        title: "Top 10 Tailwind CSS Tips",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        desc: "Useful Tailwind tricks for building modern UI faster.",
    },

    {
        id: 3,
        title: "MongoDB vs SQL Explained",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        desc: "Understand databases in the simplest possible way.",
    },

    {
        id: 4,
        title: "Build Modern UI With React",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        desc: "Learn how to create beautiful frontend applications.",
    },
];

const HomePage = () => {
    return (
        <div className="bg-black min-h-screen">

            <Header />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-5 pt-16 pb-10">
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Discover Amazing <span className="text-yellow-400">Blogs</span>
                    </h1>

                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
                        Explore trending articles, tech tutorials, development
                        guides, and modern web experiences with Blogify.
                    </p>

                    <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3 rounded-2xl transition inline-flex items-center gap-2">
                        Explore Blogs
                        <FaArrowRight />
                    </button>
                </div>
            </section>

            {/* Blog Listing */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-white">
                        Latest Blogs
                    </h2>

                    <button className="text-yellow-400 hover:text-yellow-300 transition">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-white text-xl font-semibold leading-8">
                                    {blog.title}
                                </h3>

                                <p className="text-zinc-400 mt-3 leading-7">
                                    {blog.desc}
                                </p>

                                <button className="mt-5 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    Read More
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;