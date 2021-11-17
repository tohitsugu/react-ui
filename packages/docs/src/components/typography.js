import React from 'react'
import {
  Text,
  Heading as BaseHeading,
  Paragraph as BaseParagraph,
  merge
} from 'react-ui'
import { withTheme } from 'emotion-theming'

export const Paragraph = props => {
  return (
    <BaseParagraph
      css={{ display: 'block', lineHeight: 1.4 }}
      gap={4}
      marginBottom={10}
      {...props}
    />
  )
}

export const Para = Paragraph

export const Heading = props => {
  return (
    <BaseHeading
      as="h1"
      marginBottom={5}
      css={{ fontWeight: 'normal' }}
      {...props}
    />
  )
}

export const Tagline = props => {
  return (
    <Text size={4} color="text.subtle" css={{ display: 'block' }} {...props} />
  )
}

export const Code = withTheme(props => {
  const isDark = props.theme.name === 'React UI Dark'

  return (
    <Text
      css={{
        fontFamily: 'Roboto Mono',
        fontSize: '90%',
        verticalAlign: 'text-bottom',
        backgroundColor: isDark ? 'grays.800' : 'grays.200',
        color: isDark ? 'grays.100' : 'grays.800',
        paddingX: 1,
        borderRadius: 1,
        position: 'relative',
        bottom: '-1px',
        paddingBottom: '1px'
      }}
      {...props}
    />
  )
})

export const SectionHeading = ({ css, ...props }) => {
  return (
    <BaseHeading
      as="h2"
      marginBottom={10}
      css={merge(
        {
          fontSize: 5,
          fontWeight: 'normal',
          color: 'text.body'
        },
        css
      )}
      {...props}
    />
  )
}

export const ExampleHeading = props => {
  return (
    <BaseHeading
      as="h3"
      marginBottom={6}
      css={{ fontSize: 4, fontWeight: 'normal' }}
      {...props}
    />
  )
}
