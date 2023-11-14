/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
/**
 * @param {React.FunctionComponent} Component
 */
export default function WrapperFun(Component) {
  return function WrappedComponent(/** @type {any} */ props) {
    return (

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <DndProvider backend={HTML5Backend}>
        <Component {...props} />
      </DndProvider>
    );
  };
}