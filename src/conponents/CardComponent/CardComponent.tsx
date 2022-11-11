import React, { useState } from "react"
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  FormControlLabel,
  Checkbox
} from "@mui/material"

import { grey } from '@mui/material/colors';

const defaultProps = {
  label: 'Option Name',
}

interface CardComponentProps {
  defaultChecked?: boolean
  onChange: (value: boolean) => void
  imageSrc?: string
  fallbackSrc?: string
  label?: string
}

export default function CardComponent({
  defaultChecked,
  onChange,
  imageSrc,
  fallbackSrc,
  label,
}: CardComponentProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(defaultChecked ?? false)

  const onAreaClick = () => {
    onChange(!checked)
    setChecked((checked) => !checked)
  }

  return (
    <Card
      sx={{
        maxWidth: 230,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: checked ? '#3D8479': grey[200],
        borderRadius: '10px',
        '&:hover': {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: '#65e9d9',
        }
      }}
      elevation={0}
    >
      <CardActionArea
        sx={{ height: '100%' }}
        onClick={onAreaClick}
      >
        <CardMedia
          component="img"
          height="100"
          image={imageSrc || fallbackSrc}
          alt={label}
        />
        <CardContent
          sx={{
            '&': {
              padding: '8px',
              '&:last-child': {
                paddingBottom: '8px'
              }
            }
          }}
        >
          <FormControlLabel
            label={label}
            onClick={event => event.preventDefault()}
            control={
              <Checkbox
                checked={checked}
                disableRipple
                inputProps={{
                  'aria-label': 'controlled',
                }}
                sx={{
                  '&.Mui-checked': {
                    color: "#21B6A8"
                  }
                }}
              />
            }
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

CardComponent.defaultProps = defaultProps
