import React from "react";

/*
 * This a dashboard router it gets the children nested in router
 * filter them based on their prop path
 * only render the element with the prop path equal to the prop to
 *
 */

function getChildrenArray(children) {
  const Arraychildren = React.Children.toArray(children);
  return Arraychildren;
}

function filterCurrentView(children, path) {
  let Arraychildren = getChildrenArray(children);
  return Arraychildren.filter(child => child.props.to === path);
}

export default function Router({ children, path }) {
  return <>{filterCurrentView(children, path)}</>;
}
