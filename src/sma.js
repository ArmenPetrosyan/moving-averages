// Smoothed moving average

import dma from './dma'

export default (data, size, times) => dma(data, times / size, 1)
