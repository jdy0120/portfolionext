import { Skeleton, Typography } from "antd";
import { motion } from "framer-motion";
import { ItemStyle, ContainerStyle } from "../../interface/motion";
import styled from "@emotion/styled";
import { useThemeStore } from "../../lib/zustand/themeStore";
import { usePathname } from "next/navigation";
import Link from "next/link";

const InfoContainer = styled(motion.div)`
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

interface Props {
  animating: Boolean;
  data:
    | {
        id: string;
        name: string;
        age: string;
        distance: string;
        position: string;
        titleDetail: string;
        subDescriptions: any;
        pics: string;
      }
    | undefined;
}

const Card = (props: Props) => {
  const { useDark } = useThemeStore();
  const pathname = usePathname();
  const { animating } = props;
  const { data } = props;

  return data ? (
    <Link
      href={`${pathname}/${data.id}`}
      style={{
        color: useDark
          ? "rgba(255, 255, 255, 0.65)"
          : "rgba(0, 0, 0, 0.65)",
      }}
    >
      <InfoContainer
        className="container"
        variants={ContainerStyle}
        initial="hidden"
        animate={animating ? "visible" : "hidden"}
      >
        <motion.div variants={ItemStyle}>
          <Typography.Text
            style={{
              fontSize: 32,
              marginBottom: 14,
              fontFamily: "NEXON Lv2 Gothic Bold",
              letterSpacing: -2.4,
            }}
          >
            {data.name}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text
            style={{ margin: 0, fontWeight: 300, fontSize: 20 }}
          >
            {data.age}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text
            style={{ margin: 0, fontWeight: 300, fontSize: 18 }}
          >
            {data.distance}
          </Typography.Text>
        </motion.div>
        <motion.div variants={ItemStyle}>
          <Typography.Text
            style={{ margin: 0, fontWeight: 300, fontSize: 14 }}
          >
            {data.position}
          </Typography.Text>
        </motion.div>
      </InfoContainer>
    </Link>
  ) : (
    <Skeleton active paragraph={{ rows: 2 }} />
  );
};

export default Card;
