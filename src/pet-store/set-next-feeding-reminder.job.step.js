export const config = {
    type:"event",
    name:'JsSetNextFeedingReminder',
    description:"Background job that sets next feeding reminder and adds welcome notes",
    subscribes:['js.feeding.reminder']
}