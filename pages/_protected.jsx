import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import router from "next/router";

import { AuthContext } from "../src/context";
import Header from "../src/components/header/Header";
import Sidebar from "../src/components/sidebar/Sidebar";
import Spinner from "../src/components/spinner/Spinner";

const ProtectedPage = ({ children }) => {
  const [view, setView] = useState(<Spinner />);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (user) {
      setView(
        <>
          <Header onSidebarToggle={toggleSidebar} />
          <Sidebar
            isOpen={isSidebarOpen}
            onOpen={openSidebar}
            onClose={closeSidebar}
          />
          {children}
        </>
      );
    } else {
      router.push("/login");
    }
  }, [user, isSidebarOpen]);

  return view;
};

ProtectedPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedPage;
