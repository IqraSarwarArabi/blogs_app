import styles from "./BlogCard.module.css";
import { Image, Card, CardHeader, CardBody, Flex } from "@chakra-ui/react";
import InnerHTML from "dangerously-set-html-content";
import { Link } from "react-router-dom";

function BlogCard({ src = "", title = "", content = "", id = 0 }) {
  const blogLink = `/blog/${id}`;

  return (
    <div className={styles.container}>
      <Card maxW="sm" minW="sm" maxH="xl" minH="xl">
        <Flex direction="column" align="left">
          <Image
            className={styles.image}
            objectFit="fit"
            src={src}
            alt="Chakra UI"
          />
          <CardHeader>
            <p className={styles.title}>{title}</p>
          </CardHeader>
          <CardBody>
            <div className={styles.textContainer}>
              <InnerHTML html={content} />
            </div>
            <Link to={blogLink} className="button">
              Read More
            </Link>
          </CardBody>
        </Flex>
      </Card>
    </div>
  );
}

export default BlogCard;
