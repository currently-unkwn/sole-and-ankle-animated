/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import NavLink from "../NavLink";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLinkAnimated
              href="/sale"
              style={{ "--animation-delay": 500 + "ms" }}
            >
              Sale
            </NavLinkAnimated>
            <NavLinkAnimated
              href="/new"
              style={{ "--animation-delay": 550 + "ms" }}
            >
              New&nbsp;Releases
            </NavLinkAnimated>
            <NavLinkAnimated
              href="/men"
              style={{ "--animation-delay": 600 + "ms" }}
            >
              Men
            </NavLinkAnimated>
            <NavLinkAnimated
              href="/women"
              style={{ "--animation-delay": 650 + "ms" }}
            >
              Women
            </NavLinkAnimated>
            <NavLinkAnimated
              href="/kids"
              style={{ "--animation-delay": 700 + "ms" }}
            >
              Kids
            </NavLinkAnimated>
            <NavLinkAnimated
              href="/collections"
              style={{ "--animation-delay": 750 + "ms" }}
            >
              Collections
            </NavLinkAnimated>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const rotateIn = keyframes`
  from{
    transform: rotateY(180deg);
  }
  to{transform: rotateY(0deg);}
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);

  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 400ms both cubic-bezier(0, 0.6, 0.66, 1.07);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  /* animation: ${fadeIn} 600ms both;
  animation-delay: 400ms; */
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLinkAnimated = styled(NavLink)`
  animation: ${fadeIn} 400ms both, ${slideIn} 400ms both;
  animation-delay: var(--animation-delay);
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
