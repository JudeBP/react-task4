import { Box } from '@mui/material'
import React from 'react'
import mountain from '../images/mountain.jpg'

const About = () => {
  return (
    <>
      <h3>About Us</h3>
      <Box sx={{ flexGrow: 1, marginTop: '-20px', fontSize: '14px' }}>
        <img style={{ height: '90vh' }} src={mountain} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolorum ea eius natus incidunt consequatur, saepe iusto, sit quos iure at debitis et! Laboriosam amet qui laudantium aut exercitationem provident ut quam vero illo incidunt dolorum quia neque harum eos minima distinctio, placeat ab? Ipsum autem aut laboriosam ea distinctio temporibus id hic? Veritatis vel labore sequi, natus quas voluptas ratione neque fuga vero molestias eligendi possimus tempora voluptatibus distinctio. Cupiditate, optio! Ea quasi aspernatur facilis nisi praesentium, consequuntur modi nam nostrum culpa in ratione sint laudantium! Omnis, repellendus facilis, architecto excepturi accusamus soluta eveniet laudantium laboriosam obcaecati nam culpa?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad architecto eligendi expedita corporis doloribus autem, nostrum tempore voluptate? Impedit eum corrupti sit cupiditate quaerat quidem quasi commodi aspernatur dolorum, sint aperiam architecto ipsum vero dolor perspiciatis illum tempore eos, aliquam ipsa iure maxime omnis. Maxime rem voluptatum facilis consectetur nobis?
        </p>
      </Box>
    </>
  )
}

export default About