
import React, {} from "react";
import { Anchor } from 'antd';
const { Link } = Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

const CreateAssets = () => (
  <Anchor affix={false} onClick={handleClick}>
    <Link href="https://opensea.io/collection/ggrogilla-the-great" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
);


export default CreateAssets;
