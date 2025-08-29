const CardTitle = ({ children, action }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    mb={2}
  >
    <Typography variant="h6" fontWeight={600}>
      {children}
    </Typography>
    {action}
  </Stack>
);

const KPI = ({ icon, label, value, chipColor }) => (
  <Paper elevation={0} sx={{ p: 2.5 }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ bgcolor: "action.hover", p: 1.5, borderRadius: 3 }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {value}
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <Chip
        size="small"
        label="This month"
        color={chipColor || "default"}
        variant="outlined"
      />
    </Stack>
  </Paper>
);

export { CardTitle, KPI };