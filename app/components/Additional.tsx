import React from "react";

const RecentPosts: React.FC = () => {
  return (
    
    <section className="section recent" aria-label="recent post">
        
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">
            See what we’ve <strong className="strong">written lately</strong>
          </h2>

          <div className="top-author">
            <ul className="avatar-list">
              {[1, 2, 3, 4, 5].map((author) => (
                <li className="avatar-item" key={author}>
                  <a href="#" className="avatar large img-holder" style={{ width: 100, height: 100 }}>
                    <img
                      src={`./assets/images/author-${author}.jpg`}
                      width="100"
                      height="100"
                      alt="top author"
                      className="img-cover"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <span className="span">Meet our top authors</span>
          </div>
        </div>

        <ul className="recommended grid-list">
          {[
            {
              id: 1,
              image: "recent-1.jpg",
              authors: [3, 5],
              tags: ["Lifestyle", "People", "Review"],
              title: "Creating is a privilege but it’s also a gift",
              text: "Nullam vel risus.",
            },
            {
              id: 2,
              image: "recent-2.jpg",
              authors: [5],
              tags: ["Design", "Product", "Idea"],
              title: "Being unique is better than being perfect",
              text: "Nam in pretium dui.a.",
            },
            {
              id: 3,
              image: "recent-3.jpg",
              authors: [2, 5, 1],
              tags: ["Idea", "Product", "Review"],
              title: "Now we’re getting somewhere",
              text: "Class aptentat.",
            },
            {
              id: 4,
              image: "recent-4.jpg",
              authors: [3],
              tags: ["Lifestyle", "Design"],
              title: "The trick to getting more done is to have the freedom to roam around",
              text: "Integer",
            },
            {
              id: 5,
              image: "recent-5.jpg",
              authors: [1, 6],
              tags: ["People", "Story", "Lifestyle"],
              title: "Every day, in every city and town across the country",
              text: "Morbi a faet sodales metus elementum. \viverra.",
            },
            {
              id: 6,
              image: "recent-6.jpg",
              authors: [6],
              tags: ["People", "Review", "Story"],
              title: "Your voice, your mind, your story, your vision",
              text: "Nullam auctor ns scelerisque, sagittis tortor et, maximus metus.",
            },
          ].map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ width: "100%", height: "auto" }}>
                  <img
                    src={`./assets/images/${post.image}`}
                    width="550"
                    height="660"
                    loading="lazy"
                    alt={post.title}
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    {post.authors.map((author) => (
                      <li className="avatar-item" key={author}>
                        <a href="#" className="avatar img-holder" style={{ width: 100, height: 100 }}>
                          <img
                            src={`./assets/images/author-${author}.jpg`}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <a href="#" className="card-tag">
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <h3 className="h4">
                    <a href="#" className="card-title hover:underline">
                      {post.title}
                    </a>
                  </h3>

                  <p className="card-text">{post.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn">Load more</button>
      </div>
    </section>
  );
};

export default RecentPosts;