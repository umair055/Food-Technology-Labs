import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import { Facebook, Instagram, Twitter, LinkedIn, Message, Send, Science, MenuBook, Edit, Restaurant, Mail } from '@mui/icons-material'
import { toast, Toaster } from "sonner"

// Create a dark theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#05C26A',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderColor: '#05C26A',
                    boxShadow: '0 0 15px rgba(5,194,106,0.3)',
                    '&:hover': {
                        boxShadow: '0 0 25px rgba(5,194,106,0.5)',
                    },
                    transition: 'box-shadow 0.3s ease-in-out',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#05C26A',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#04A55A',
                    },
                },
            },
        },
    },
})

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const services = [
    { icon: <Science />, title: 'Food Consulting', description: 'Expert advice on food science, technology, and innovation.' },
    { icon: <Restaurant />, title: 'Food Services', description: 'Comprehensive solutions for all your food-related needs.' },
    { icon: <MenuBook />, title: 'Food Blog', description: 'Stay updated with the latest in food technology and trends.' },
    { icon: <Edit />, title: 'Write for Us', description: 'Share your food expertise with our growing community.' },
    { icon: <Mail />, title: 'Email Us', description: 'Reach out directly to our team.', email: 'Foodtechnolgylabs@gmail.com' },
]

const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/FoodTechnologyLabs" },
    { icon: <Instagram />, href: "https://www.instagram.com/foodtechnologylabs/" },
    { icon: <Twitter />, href: "https://twitter.com/FoodTechLabs" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/company/food-technology-labs/" },
]

export default function ContactUsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        toast.success("Message sent successfully!")
        setIsSubmitting(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Toaster />
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', fontFamily: 'Roboto, sans-serif' }}>
                <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 4, py: 12 }}>
                    {/* Header Section */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                    >
                        <Typography variant="h2" component="h1" align="center" sx={{ color: 'primary.main', mb: 2 }}>
                            Connect with Food Technology Labs
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', mb: 6 }}>
                            Whether you're seeking food consulting, interested in our services, want to contribute to our blog, or have any questions, we're here to help!
                        </Typography>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <Grid container spacing={3} sx={{ mb: 6 }}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                                    <motion.div variants={fadeInUp}>
                                        <Card>
                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                                    {React.cloneElement(service.icon, { sx: { color: 'black' } })}
                                                </Box>
                                                <Typography variant="h6" component="h3" sx={{ color: 'primary.main', mb: 1 }}>
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {service.description}
                                                </Typography>
                                                {service.email && (
                                                    <Typography variant="body2" component="a" href={`mailto:${service.email}`} sx={{ color: 'primary.main', mt: 1, '&:hover': { textDecoration: 'underline' } }}>
                                                        {service.email}
                                                    </Typography>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                    >
                        <Card>
                            <CardContent sx={{ p: 4 }}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Name"
                                                variant="outlined"
                                                placeholder="Your name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Email"
                                                variant="outlined"
                                                type="email"
                                                placeholder="your@email.com"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel>Subject</InputLabel>
                                                <Select
                                                    label="Subject"
                                                    defaultValue="consulting"
                                                >
                                                    <MenuItem value="consulting">Food Consulting</MenuItem>
                                                    <MenuItem value="product-development">Product Development</MenuItem>
                                                    <MenuItem value="quality-assurance">Quality Assurance</MenuItem>
                                                    <MenuItem value="food-safety">Food Safety</MenuItem>
                                                    <MenuItem value="nutritional-analysis">Nutritional Analysis</MenuItem>
                                                    <MenuItem value="packaging-solutions">Packaging Solutions</MenuItem>
                                                    <MenuItem value="blog-contribution">Blog Contribution</MenuItem>
                                                    <MenuItem value="write-for-us">Write for Us</MenuItem>
                                                    <MenuItem value="partnership">Partnership Opportunities</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Message"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                placeholder="Your message..."
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={isSubmitting}
                                                startIcon={isSubmitting ? <Message /> : <Send />}
                                                sx={{ px: 4, py: 1, transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <IconButton
                                    component="a"
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        mx: 1,
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: 'background.paper',
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            </motion.div>
                        ))}
                    </motion.div>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

