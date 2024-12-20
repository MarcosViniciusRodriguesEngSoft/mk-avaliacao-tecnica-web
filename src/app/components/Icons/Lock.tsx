import { SVGProps } from "react";

const Lock: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      {...props}
      fill={props.color || "#8F8D8D"}
      viewBox='0 0 24 24'
    >
      <path d="M19.5 7.68701H16.3125V5.24951C16.3125 4.10577 15.8581 3.00886 15.0494 2.20011C14.2406 1.39136 13.1437 0.937012 12 0.937012C10.8563 0.937012 9.75935 1.39136 8.9506 2.20011C8.14185 3.00886 7.6875 4.10577 7.6875 5.24951V7.68701H4.5C4.1519 7.68701 3.81806 7.82529 3.57192 8.07143C3.32578 8.31758 3.1875 8.65141 3.1875 8.99951V19.4995C3.1875 19.8476 3.32578 20.1814 3.57192 20.4276C3.81806 20.6737 4.1519 20.812 4.5 20.812H19.5C19.8481 20.812 20.1819 20.6737 20.4281 20.4276C20.6742 20.1814 20.8125 19.8476 20.8125 19.4995V8.99951C20.8125 8.65141 20.6742 8.31758 20.4281 8.07143C20.1819 7.82529 19.8481 7.68701 19.5 7.68701ZM8.8125 5.24951C8.8125 4.40413 9.14832 3.59338 9.7461 2.99561C10.3439 2.39784 11.1546 2.06201 12 2.06201C12.8454 2.06201 13.6561 2.39784 14.2539 2.99561C14.8517 3.59338 15.1875 4.40413 15.1875 5.24951V7.68701H8.8125V5.24951ZM19.6875 19.4995C19.6875 19.5492 19.6677 19.5969 19.6326 19.6321C19.5974 19.6673 19.5497 19.687 19.5 19.687H4.5C4.45027 19.687 4.40258 19.6673 4.36742 19.6321C4.33225 19.5969 4.3125 19.5492 4.3125 19.4995V8.99951C4.3125 8.94978 4.33225 8.90209 4.36742 8.86693C4.40258 8.83177 4.45027 8.81201 4.5 8.81201H19.5C19.5497 8.81201 19.5974 8.83177 19.6326 8.86693C19.6677 8.90209 19.6875 8.94978 19.6875 8.99951V19.4995Z"/>
    </svg>
  );
};

export default Lock;
