import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8GVuDF8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 120,
      author: { _id: 2, name: "Jane Smith" },
      _id: 2,
      description: "Exploring the future of AI and robotics.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Technology",
      title: "The Rise of AI",
    },
    {
      _createdAt: new Date(),
      views: 87,
      author: { _id: 3, name: "Michael Johnson" },
      _id: 3,
      description: "A deep dive into modern space exploration.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Space",
      title: "Exploring the Cosmos",
    },
    {
      _createdAt: new Date(),
      views: 200,
      author: { _id: 4, name: "Sarah Williams" },
      _id: 4,
      description: "How sustainable energy is shaping our world.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Energy",
      title: "The Future of Solar Power",
    },
    {
      _createdAt: new Date(),
      views: 320,
      author: { _id: 5, name: "David Brown" },
      _id: 5,
      description: "A guide to building efficient web applications.",
      image:
        "https://images.unsplash.com/photo-1538431656985-64e5d4436344?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Web Development",
      title: "Optimizing Web Performance",
    },
  ];
    
return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Pitches"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p className="no-results">No results found</p>
          )}
        </ul>
      </section>
    </>
  );
}
