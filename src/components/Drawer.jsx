import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

const Drawer = ({ isOpen, onClose }) => {
  const defaultTags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 max-w-full w-[300px] bg-white p-4">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Select Tags:</p>
              {defaultTags.map((tag) => (
                <Button
                  key={tag}
                  className="mb-2"
                  // You can add onClick handlers or other props as needed
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Drawer;
