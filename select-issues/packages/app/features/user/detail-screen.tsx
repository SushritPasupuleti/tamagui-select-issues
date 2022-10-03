import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/feather-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import SelectDemo from 'app/components/SelectComponent'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const linkProps = useLink({ href: '/' })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
      <YStack space>
        <SelectDemo />
        <SelectDemo />
      </YStack>
      <Button {...linkProps} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
