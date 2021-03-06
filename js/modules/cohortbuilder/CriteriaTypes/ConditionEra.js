define(['knockout', '../InputTypes/Range', 'conceptpicker/InputTypes/Concept'], function (ko, Range, Concept) {

	function ConditionEra(data) {
		var self = this;
		data = data || {};

		// General Condition Occurence Criteria

		// Verbatim fields
		self.CodesetId = ko.observable(data.CodesetId);

		self.EraStartDate = ko.observable(data.EraStartDate && new Range(data.EraStartDate));
		self.EraEndDate = ko.observable(data.EraEndDate && new Range(data.EraEndDate));
		self.OccurrenceCount = ko.observable(data.OccurrenceCount && new Range(data.OccurrenceCount));
		self.EraLength = ko.observable(data.EraLength && new Range(data.EraLength));

		// Derived Fields
		self.First = ko.observable(data.First || null);
		self.AgeAtStart = ko.observable(data.AgeAtStart && new Range(data.AgeAtStart));
		self.AgeAtEnd = ko.observable(data.AgeAtEnd && new Range(data.AgeAtEnd));

		// Linked Fields
		self.Gender = ko.observable(data.Gender && ko.observableArray(data.Gender.map(function (d) {
			return new Concept(d);
		})));
	}

	ConditionEra.prototype.toJSON = function () {
		return this;
	}
	return ConditionEra;
});