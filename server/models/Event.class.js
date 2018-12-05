class EventClass {

    constructor(props) {
        this.__shield = props.shield || 0;
        this.__cuirass = props.cuirass || 0;
        if (!props.owner) {
            throw new Error('props "owner" is required');
        }
        this.__owner = props.owner;
    }

    /**
     * @description wykonuje modyfikacje obiektu
     * */
    takeActionObject(objectClass) {

        const damageShield = objectClass.shield - this.__shield;
        objectClass.shield = damageShield < 0 ? 0 : damageShield;

        if (damageShield < 0) {
            this.__cuirass = this.__cuirass + damageShield * -1;
        }

        const damageCuirass = objectClass.cuirass - this.__cuirass;
        objectClass.cuirass = damageCuirass < 0 ? 0 : damageCuirass;

    }
    getOwner() {
        return this.__owner.getOwner();
    }
}


module.exports = EventClass;