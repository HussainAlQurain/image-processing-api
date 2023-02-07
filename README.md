# Scripts
##    -prettier: npm run prettier
##    -build: npm run build
##    -lint: npm run lint
##    -jasmine: npm run jasmine
##    -run unit tests: npm run test
##    -start server: npm run start
    
# Usage
## -The server will listen on port 3000:

# Endpoint to resize images
## -http://localhost:3000/api/images

# query arguments are:

# filename: Available images are:
### -encenadaport
### -fjord
### -icelandwaterfall
### -palmtunnel
### -santamonica
## width: pixel value
## height: pixel value
# Examples
## -http://localhost:3000/api/images Will display the list of available image names
## -http://localhost:3000/api/images?filename=encenadaport Will display the original encenadaport image.
## -http://localhost:3000/api/images?filename=fjord&width=200&height=200 Will scale the fjord image to 200 by 200 pixels and store the resulting image. Future calls will serve the resized image instead of resizing the original again.

# Notes
## file extension checking is not fully implemented.
## files are server from images folder, and processed are stored in processed folder.