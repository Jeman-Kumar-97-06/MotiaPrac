export const config = {
    type:"event",
    name:'JsSetNextFeedingReminder',
    description:"Background job that sets next feeding reminder and adds welcome notes",
    subscribes:['js.feeding.reminder'],
    emits:[]
}

const handler = async (input,context) => {
    const {emit, logger} = context || {}
    const {petId,enqueuedAt} = input;
    if (logger) {
        logger.info('Setting next feeding reminder',{petId,enqueuedAt});
    }
    try {
        const nextFeedingAt = Date.now() + (24*60*60*1000)
        const updates = {
            notes:'Welcome to our pet store! We\'ll take great care of this pet.',
            nextFeedingAt: nextFeedingAt
        }
        const updatedPet = update(petId,updates)
        if (!updatedPet){
            
        }
    }
}