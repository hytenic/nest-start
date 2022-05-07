import { Query, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies'
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after : ${searchingYear} years`
    }

    @Get(":id")
    getOne(@Param('id') movieId: string) {
        return `This will return one movie ${movieId}`
    }


    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return 'This will create a movie'
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will remove movie ${movieId}`
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `This will patch movie ${movieId}`
    }
}
