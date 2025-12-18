export const config = {
    name : "CreatePet",
    type : "api",
    path : "/pets",
    method : "POST",
    emits : []
};

export const handler = async (req) => {
    const b         = req.body || {};
    const name      = typeof b.name ==='string' && b.name.trim();
    const speciesOk = ['dog','cat','bird','other'].includes(b.species);
    const ageOk     = Number.isFinite(b.ageMonths);

    if (!name || )
}