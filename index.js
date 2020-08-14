//TODO 
// formato para fechas

/**
 * Get month name 
 * @param  {int} Id Index between 0-11
 * @param  {string} Lang Language for month name, default ='es'  
 * @return  {string} Month name
 */
exports.getMonthFullName = function(id, lang)
{
    if(id <0 || id > 11) return null;

    var monthEs = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
    var monthsEn = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    if(lang == 'es' || lang == undefined)
    {
        return monthEs[id];
    }
    
    if(lang == 'en'){
        return monthsEn[id];
    }    
};

/**
 * Get short month name 
 * @param  {int} Id Index between 0-11
 * @param  {string} Lang Language for month name, default ='es'  
 * @return  {string} Short month name
 */
exports.getMonthShortName = function(id, lang)
{
    if(id < 0 || id > 11) return null;

    var monthEs = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ];
    var monthsEn = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    if(lang == 'es' || lang == undefined)
    {
        return monthEs[id];
    }
    
    if(lang == 'en'){
        return monthsEn[id];
    }    
};

/**
 * Format number to short form K, M, B  
 * @param  {int} value Number
 * @param  {int} includeSeparator Include separator point (default=true)
 * @return  {string} Formatted number
 */
exports.formatLongNumber = function(value, includeSeparator = true)
{    
    if(value>=1e12)
    {
        value /= 1e12;
        suff = 'B';
    }else if(value>=1e6)
    {
        value /= 1e6;
        suff = 'M';
    }else{
        value /= 1e3;
        suff = 'K';
    }
    
    if(includeSeparator == true)
    {
        value = value.toString();
        value = value.split(/(?=(?:...)*$)/);

        // Convert the array to a string and format the output
        value = value.join('.');
    }
    
    return value + suff;
};

/**
 * Format number to separate thousand units 
 * @param  {int} value Number to format 
 * @return  {string} Formatted number
 */
exports.formatNumberSeparator = function(value)
{   
    value = value.toString();
    value = value.split(/(?=(?:...)*$)/);

    // Convert the array to a string and format the output
    value = value.join('.');    
    return value;
};