import { motion } from "framer-motion";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.css";
import { Link } from "react-router-dom";
interface CardProps {
  cardTitle: string;
  image?: string;
  hyperLink?:string;
  classes?: string;
  children: ReactNode;
}

const cardVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Cards = ({ cardTitle, image,hyperLink, classes, children }: CardProps) => {
  const hyperLinkChecked = hyperLink === undefined ? "/" : hyperLink
  return (
    <>
      <motion.div
        key={cardTitle}
        whileHover="hover"
        whileTap="tap"
        variants={cardVariants}
      >
        <Link to={hyperLinkChecked} style={{ textDecoration: 'none' }}>
          <Card style={{ width: "18rem" }} className={classes + " text-bg-dark"}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>{children}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </motion.div>
    </>
  );
};

export default Cards;
