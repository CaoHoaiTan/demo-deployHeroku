// The number of elements contained in the matched element set
jQuery.fn.size = function () {
    migrateWarn("jQuery.fn.size() is deprecated; use the .length property");
    return this.length;
};

jQuery.parseJSON = function () {
    migrateWarn("jQuery.parseJSON is deprecated; use JSON.parse");
    return JSON.parse.apply(null, arguments);
};