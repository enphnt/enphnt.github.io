import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const lightColors = ["lightgray", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue"];
let colorIndex = 0;

const ArticleListItem = ({ node: { id, frontmatter: { thumbnail, slug, title, date, tags }, excerpt } }) => {
  const thumb = getImage(thumbnail);
  const styles = {
    article: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(9em, 1fr))",
      gridGap: "1em",
      maxWidth: "99%",
      padding: "1em 1em",
    },
    tag: {
      padding: 4,
      margin: "4px",
      backgroundColor: "#e0e0e0",
      color: "inherit",
      borderRadius: "4px",
      textDecoration: "none",
    },
    blogFooterTags: {
      display: "flex",
      flexWrap: "wrap",
    },
    heading: {
      marginTop: 0,
      fontSize: "1.6em",
      fontWeight: 600,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: lightColors[1 + colorIndex++ % lightColors.length],
      textDecorationThickness: 1,
    },
    thumbnailWrapper: {
      margin: "0.5em 0 0 0",
      justifySelf: "center"
    },
    info: {
      gridColumnEnd: "span 3"
    },
    hr: {
      color: lightColors[colorIndex++ % lightColors.length],
      margin: 0,
    }
  };

  return (
    <div>
      <hr style={styles.hr} />
      <article style={styles.article} key={id}>

        <div style={styles.thumbnailWrapper}>
          <Link id="nohighlight" aria-label={slug} key={slug} to={`/blog/${slug}/`}>
            <GatsbyImage
              image={thumb}
              alt={`Thumbnail for ${title}`}
            />
          </Link>
        </div>

        <div style={styles.info}>
          <Link aria-label={slug} key={slug} to={`/blog/${slug}/`} style={styles.heading}>
            {title}
          </Link >

          <h5>{date}</h5>
          <p>{excerpt}</p>
          <div style={styles.blogFooterTags}>
            {
              tags.map(tag => (
                <Link key={tag} to={`/tags/${tag.replace(/ /g, "-")}/`} style={styles.tag}>
                  {tag}
                </Link>
              ))
            }
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleListItem;