import * as React from 'react';

function SvgAddressBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.938 3H5.812c-1.23 0-2.25 1.02-2.25 2.25v13.5c0 1.23 1.02 2.25 2.25 2.25h10.125c1.23 0 2.25-1.02 2.25-2.25V5.25c0-1.23-1.02-2.25-2.25-2.25zm-5.063 4.5c1.23 0 2.25 1.02 2.25 2.25S12.105 12 10.875 12s-2.25-1.02-2.25-2.25 1.02-2.25 2.25-2.25zm3.375 9H7.5a.555.555 0 01-.563-.563 2.82 2.82 0 012.813-2.812H12a2.82 2.82 0 012.813 2.813.555.555 0 01-.563.562zm5.625-11.25h-.563v3.375h.563a.555.555 0 00.563-.563v-2.25a.555.555 0 00-.563-.562zm0 4.5h-.563v3.375h.563a.555.555 0 00.563-.563v-2.25a.555.555 0 00-.563-.562zm0 4.5h-.563v3.375h.563a.555.555 0 00.563-.563v-2.25a.555.555 0 00-.563-.562z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgAddressBook;
