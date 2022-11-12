export default {
  type: "object",
  properties: {
    update_id: { type: 'integer'},
    message: {type: 'object'},
    update: {type: 'object'},
  },
} as const;
