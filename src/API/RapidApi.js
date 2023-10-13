import React from 'react';
import axios from 'axios';

export const exercisedb=axios.create({
    baseURL:'https://exercisedb.p.rapidapi.com/exercises',
    headers:{
        'X-RapidAPI-Key': '4ad5583817mshdd9a72dbcf87e52p158c72jsnd81d9627fa89',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
})