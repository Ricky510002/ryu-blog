import { motion } from "framer-motion";

const Layout = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Layout;