import React from 'react'
import { Element, Stack } from 'react-ui'

const content = {
  accessible: {
    styles: {
      backgroundColor: 'greens.100',
      color: 'greens.800'
    },
    icon: (
      <svg
        width="13"
        height="10"
        viewBox="0 0 13 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.49708 6.32228L11 0L12.3942 1.43399L4.49708 9.11171L0.5 5L1.74391 3.76732L4.49708 6.32228Z"
          fill="currentcolor"
        />
      </svg>
    )
  },
  Layout: {
    styles: {
      backgroundColor: 'yellows.100',
      color: 'yellows.800'
    }
  }
}

export const Badge = props => {
  return (
    <Element
      as={props => <Stack as="span" {...props} />}
      inline
      align="center"
      gap={1}
      css={{
        fontSize: 2,
        borderRadius: 1,
        fontWeight: 'semibold',
        paddingX: 2,
        paddingY: 1,
        ...content[props.children].styles
      }}
      {...props}
    >
      {content[props.children].icon}
      <span>{props.children}</span>
    </Element>
  )
}
