export default {
  type: "Update",
  properties: {
    update_id: { type: 'int' },
    message: {type: "object"},
    update: {type: "object"},
  },
} as const;
