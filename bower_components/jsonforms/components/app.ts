///<reference path="./references.ts"/>

angular.module('jsonforms', [
    'ui.bootstrap',
    'ui.validate',
    'ui.grid',
    'ui.grid.autoResize',
    'ui.grid.edit',
    'ui.grid.pagination',
    'jsonforms.form',
    'jsonforms.generators',
    'jsonforms.generators.schema',
    'jsonforms.generators.uischema',
    'jsonforms.pathresolver',
    'jsonforms.renderers',
    'jsonforms.renderers.controls',
    'jsonforms.renderers.controls.array',
    'jsonforms.renderers.controls.integer',
    'jsonforms.renderers.controls.boolean',
    'jsonforms.renderers.controls.reference',
    'jsonforms.renderers.controls.string',
    'jsonforms.renderers.controls.number',
    'jsonforms.renderers.controls.datetime',
    'jsonforms.renderers.controls.enum',
    'jsonforms.renderers.layouts',
    'jsonforms.renderers.layouts.vertical',
    'jsonforms.renderers.layouts.horizontal',
    'jsonforms.renderers.layouts.categories',
    'jsonforms.renderers.layouts.categories.categorization',
    'jsonforms.renderers.layouts.categories.category',
    'jsonforms.renderers.extras.label',
    'jsonforms.renderers.layouts.masterdetail',
]);
