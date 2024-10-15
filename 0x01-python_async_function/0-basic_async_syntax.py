#!/usr/bin/env python3
import asyncio
import random

async def wait_random(max_delay: int = 10)-> float:
    """
    Asynchronous coroutine that waits for a random delay 
    between 0 and max_delay seconds and return the actual delay
    time.

    Args:
        Max_delay (int): The maximum amount of time (in seconds)
        to delay. Default is 10.

    Returns:
        float: The actual delay time

    """
    # Generate a random delay
    delay = random.uniform(0, max_delay)

    # Async wait
    await asyncio.sleep(delay)

    # run the code
    return delay
     